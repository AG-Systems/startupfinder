module PostsHelper
   def post_params
    params.require(:post).permit(:title, :body, :website)
  end
end
