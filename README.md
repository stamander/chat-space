# README

## userテーブル

### Association
- belongs_to :group
- belongs_to :group

## groupテーブル

### Assosiation

## messageテーブル

### Association

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
