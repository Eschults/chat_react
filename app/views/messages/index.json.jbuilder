json.messages do
  json.array! @messages do |message|
    json.extract! message, :id, :content
    json.user do
      json.id message.user.id
      json.first_name message.user.first_name
      json.avatar_url message.user.avatar_url
    end
  end
end
