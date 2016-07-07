class CreateTestUsers < ActiveRecord::Migration
  def change
    create_table :test_users do |t|
      t.string :username
      t.string :pwd

      t.timestamps null: false
    end
  end
end