class StocksController < ApplicationController
  before_action :authenticate

  def create
    stock = Stock.new(stock_params)
    stock.user_id = @current_user.id
    stock.save!
    render json: stock, serializer: StockSerializer
  end

  private

  def stock_params
    params.require(:stock).permit(:name, :ticker, :cp, :count, :bought_date)
  end
end