class Viewer < ApplicationRecord
  has_and_belongs_to_many :theatres, dependent: :destroy

  validates :name, presence: true, uniqueness: true
end
