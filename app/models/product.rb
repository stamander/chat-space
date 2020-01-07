class Product < ApplicationRecord
  # app/models/product.rb
  model Product
# ↓ 以下を追加
  mount_uploader :image, ImageUploader
end
