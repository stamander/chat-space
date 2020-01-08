# app/uploaders/image_uploader.rb
class ImageUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick

  process resize_to_fit: [800, 800]
end