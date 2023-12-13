class StockSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :ticker, :cp, :count, :bought_date
end
