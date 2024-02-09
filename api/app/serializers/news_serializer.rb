class NewsSerializer < ActiveModel::Serializer
  attributes :id, :url, :text
end
