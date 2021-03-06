class BookListsController < ApplicationController
  #auth
  load_and_authorize_resource :except => [:index, :show]
  layout "dku"
  # authorize_resource :class => false
  # skip_authorize_resource :only => [:index, :show]

  before_action :set_book_list, only: [:show]

  def index
    @book_lists = BookList.search(params[:name]).page(params[:page]).per(20)
    @book_lists_all = BookList.all
    @books = Book.all
    @book_lists_length = @books.length
    respond_to do |format|
      format.html
      format.js
      format.pdf do
        # pdf_config
        render pdf: "인액터스_공지.pdf",
               layout: 'layouts/application.pdf.haml'
      end
      format.xlsx {
        response.headers['Content-Disposition'] = 'attachment; filename="인액터스-' + Time.now.strftime("%m-%d %I%p") + '.xlsx"'
      }
    end
  end

  def show
    @books = @book_list.books
  end

  private

    def set_book_list
      @book_list = BookList.find(params[:id])
    end

    def search_params
      params.require(:book_list).permit(:name)
    end
end
