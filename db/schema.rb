# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_06_15_184932) do

  create_table "commands", force: :cascade do |t|
    t.integer "theatre_id"
    t.integer "viewer_id"
    t.string "video_id"
    t.decimal "seek_seconds"
    t.string "state"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["theatre_id"], name: "index_commands_on_theatre_id"
    t.index ["viewer_id"], name: "index_commands_on_viewer_id"
  end

  create_table "messages", force: :cascade do |t|
    t.integer "theatre_id"
    t.integer "viewer_id"
    t.text "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["theatre_id"], name: "index_messages_on_theatre_id"
    t.index ["viewer_id"], name: "index_messages_on_viewer_id"
  end

  create_table "theatres", force: :cascade do |t|
    t.string "code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "theatres_viewers", id: false, force: :cascade do |t|
    t.integer "theatre_id"
    t.integer "viewer_id"
    t.index ["theatre_id"], name: "index_theatres_viewers_on_theatre_id"
    t.index ["viewer_id"], name: "index_theatres_viewers_on_viewer_id"
  end

  create_table "viewers", force: :cascade do |t|
    t.string "first_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email"
    t.string "google_token"
    t.string "google_refresh_token"
    t.string "last_name"
    t.string "image"
  end

end
