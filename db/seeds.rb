if User.count == 0
  boris = User.create!(email: "boris@lewagon.com", password: "azertyuiop", first_name: "Boris", avatar_url: "https://avatars.githubusercontent.com/u/2471555?v=3")
  seb = User.create!(email: "seb@lewagon.com", password: "azertyuiop", first_name: "Seb", avatar_url: "https://avatars.githubusercontent.com/u/414418?v=3")
  romain = User.create!(email: "romain@lewagon.com", password: "azertyuiop", first_name: "Romain", avatar_url: "https://avatars.githubusercontent.com/u/6377103?v=3")
  kevin = User.create!(email: "kevin@lewagon.com", password: "azertyuiop", first_name: "Kevin", avatar_url: "https://avatars0.githubusercontent.com/u/9978111?v=3&s=460")
  edward = User.create!(email: "edward@lewagon.com", password: "azertyuiop", first_name: "Edward", avatar_url: "https://graph.facebook.com/v2.6/10153945596946275/picture?width=64&height=64")
end

Message.create!(user: User.find_by(first_name: "Boris"), content: "Hello!")
Message.create!(user: User.find_by(first_name: "Seb"), content: "Hey Boris!")
Message.create!(user: User.find_by(first_name: "Romain"), content: "Hello guys!")
