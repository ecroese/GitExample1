import json

jsonstr = """{"people":[{"Id":"1","FirstName":"Pieterke":"LastName":"Jansen",
    "Email":"Piet.Jansen@hotmail.com"},{"Id":"2","FirstName":"Pettertje":"LastName":"Jenske",
    "Email":"Pet.Jenson@gmail.com"},{"Id":"3","FirstName":"Letekke":"LastName":"Johansön",
    "Email":"Let.Johannsön@hotmail.com"}]}"""


jsonobj = json.loads(jsonstr)

print(jsonobj)
