ActiveAdmin.register User do

  permit_params :email, :password, :password_confirmation, :role, :username, :lnum, :name, :major_id, :certification, :use_pause

  index do
      column :email
      column :role
      column :username
      column :lnum
      column :name
      column :major_id
      column :sign_in_count
      column :current_sign_in_at
      column :last_sign_in_at
      actions
  end

  filter :email
  filter :username
  filter :role
  filter :lnum
  filter :name
  filter :major_id

  form do |f|
      f.inputs "유저 생성" do
          f.semantic_errors *f.object.errors.keys
          f.input :username
          f.input :email
          f.input :password
          f.input :password_confirmation
          f.input :lnum
          f.input :name
          f.input :major_id
          f.input :role, as: :radio, collection: {
            외부인: "외부인", 슈퍼관리자: "슈퍼관리자", 학생: "학생", 일반대표: "일반대표", 인액터스: "인액터스"
          }
          f.input :use_pause, as: :radio, collection: {
            사용정지: true, 사용가능: false
          }
          f.input :certification, as: :radio, collection: {
            인증: true, 미인증: false
          }

      end
      f.actions
  end

end
