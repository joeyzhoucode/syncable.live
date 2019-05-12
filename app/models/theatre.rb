class Theatre < ApplicationRecord
  has_many :messages, dependent: :destroy
  has_and_belongs_to_many :viewers

  validates :code, presence: true, uniqueness: true, case_sensitive: false
end
