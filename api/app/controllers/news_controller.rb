class NewsController < ApplicationController
  before_action :set_news, only: [:show, :edit, :edit, :destroy]

  # GET /news
  def index
    @news = News.all.order(created_at: "DESC").limit(20)
    render json: @news, each_serializer: NewsSerializer
  end

  # GET /news/{id}
  def show
    render json: @news, serializer: NewsSerializer
  end

  # POST /news
  def create
    @news = News.new(news_params)
    @news.save!
    render json: @news, serializer: NewsSerializer
  end

  # PATCH/PUT /news/{id}
  def edit
    @news.update!(news_params)
    render json: @news, serializer: NewsSerializer
  end

  # DELETE /news/{id}
  def destroy
    @news.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_news
      @news = News.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def news_params
      params.permit(:url, :text)
    end
end