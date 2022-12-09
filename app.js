var obj = {
    name: "Чукур",
    releaseDate:("2017 - 2021"),
    mainActor: ("Ямач,Салих, Ясмин "),
    episodes: ("4 сезона 120 серия"),
    credits: {
        producer: ("Керем Чатай"),
        screenwriter: ("Дамла Серим, Гекхан Хорзум"),
        director: ("Синан Озтюрк"),
    }
}
console.log("Сериал: ", obj.name, "\nБыл выпущен: ",obj.releaseDate, "\nВ главных ролях: ",obj.mainActor,"\nKол-во серий: ", obj.episodes,"\nРежиссер: ",obj.credits.director,"\nСценарист: ",obj.credits.screenwriter, "\nПродюсер: ",obj.credits.producer)
console.log(obj)


/////// 2 - задание  switch..case
var day = prompt('Введите день недели').toLowerCase()
switch (day){
    case "monday":
        console.log("понедельник - monday - 1")
        break;
    case "tuesday":
        console.log("вторник - tuesday - 2")
        break;
    case "wednesday":
        console.log("среда - wednesday - 3")
        break;
    case "thursday":
        console.log("четверг - thursday  - 4")
        break
    case "friday":
        console.log("пятница - friday  - 5")
        break
    case "saturday":
        console.log("суббота - saturday  - 6")
        break
    case "sunday":
        console.log("воскресенье - sunday  - 7")
        break;
    default:
        console.log("Ошибка");
        // break
    }


