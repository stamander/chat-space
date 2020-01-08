class Product < ApplicationRecord
  # app/models/product.rb
  model Product

  mount_uploader :image, ImageUploader
end
