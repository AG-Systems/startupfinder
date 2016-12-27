class AddWebsiteToPost < ActiveRecord::Migration
  def change
    add_column :posts, :website, :string
  end
end
