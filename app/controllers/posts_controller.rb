class PostsController < ApplicationController
 include PostsHelper
    def index
       @posts = Post.select("id, body, title, website").all
    end
    def api
        @posts = Post.all
        render json: @posts
    end
    def new
        @post = Post.new
    end
    
    def create
        @post = Post.new(post_params)
        @post.save
    
        redirect_to post_path(@post)
    end
    
    def show
      @post = Post.find(params[:id])        
    end
    
    def update
      @post = Post.find(params[:id])
      @post.update(article_params)
    
      flash.notice = "Article '#{@post.title}' Updated!"
    
      redirect_to post_path(@post)
    end
end
