class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :authenticate_user!, :except => [:index, :sign_in, :certify]

  # add strong param to devise
  before_action :configure_permitted_parameters, if: :devise_controller?

  #권한 설정
  skip_authorization_check :if => :devise_controller?
  # check_authorization :if => :admin_subdomain?, :only => [:update, :create, :destroy, :edit, :new]   # check_authorization :only => [:update, :destroy, :edit, :new]

  rescue_from CanCan::AccessDenied do |exception|
    respond_to do |format|
      format.json { head :forbidden }
      format.html { redirect_to main_app.root_url,  :alert =>  exception.message }
    end
  end

  private
    def authenticate_active_admin_user!
       authenticate_user!
       unless current_user.role?("슈퍼관리자")
          flash[:alert] = "권한이 없습니다"
          redirect_to root_path
       end
    end

  protected
    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_in) {|u| u.permit(:login, :username, :email, :password, :remember_me,:name, :provider, :uid, :profile)}
      devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:email, :password, :password_confirmation, :remember_me, :profile, :gender, :username,:name, :provider, :uid) }
      devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:email, :password, :password_confirmation, :student_number, :profile, :username,:name, :provider, :uid) }
    end
end
