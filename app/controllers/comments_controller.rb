class CommentsController < ApplicationController


  #auth
  load_and_authorize_resource

  before_action :set_comment, only: [:update, :destroy, :upvote, :downvote]
  before_action :set_post, only: [:create]
  before_action :set_board, only: [:create]

  def create
  	@comment = @commentable.comments.new(comment_params)
    @comment.user = current_user
    @comment.save
      # 덧글 작성 ajax
    respond_to do |format|
    	format.html
      format.js
    end
    # redirect_to :back
  end

  def destroy
    @comment.destroy
    redirect_to :back
  end

  def update
    @comment.update(comment_params)
    redirect_to :back
  end

  def upvote
    @comment.upvote_from current_user
    respond_to do |format|
      format.html
      format.js
    end
  end

  def downvote
    @comment.downvote_from current_user
    respond_to do |format|
      format.html
      format.js
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    def set_post
      @post = Post.find(params[:post_id])
    end

    def set_board
      @board = Board.find(params[:board_id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def comment_params
      params.require(:comment).permit(:content, :parent_id)
    end
end
