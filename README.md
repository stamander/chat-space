# README

## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :messages
- has_mamy :groups,through :groups_users
- has_many :groups_users

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
|add_menber|string|
### Assosiation
- has_many :users,through :groups_users
- has_mamy :messages
- has_many :groups_users

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|image|text||
|text|text||
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
