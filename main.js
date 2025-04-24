$(document).ready(
    () => {
        $("#sendBtn").click(() => {
                var fanTheme = $("fanTheme")

                var eldarNum = $("#eldarNum").val()
                var chaosNum = $("#chaosNum").val()
                var tyranidNums = $("#tyranidNums").val()
                var forumKritiks = $("#forumKritiks").val()

                var fanTheme = $("#fanTheme").val()
                var thisHeresyDidNotBe = $("#thisHeresyDidNotBe").val()
                var marinesWillDo = $("#marinesWillDo").val()
                var numOfPathos = $("#numOfPathos").val()
                var levelOfBgKnowledge = $("#levelOfBgKnowledge").val()[0]
                var enemyReaction = $("#enemyReaction").val()[0]
                var statisticKnowledge = $("#statisticKnowledge").val()[0]

                var isNotArt = $("#isNotArt").is(":checked")
                var isNotMassWeapon = $("#isNotMassWeapon").is(":checked")

                if ((Number(eldarNum) + Number(chaosNum) + Number(tyranidNums) + Number(forumKritiks)) > 100) {
                    alert("values of emenies can't be bigger than 100%!")
                    return 0
                }

                var prompt = `напиши мне фанатский рассказ о вселенной вархаммер сорок тысяч в 10000 слов на тему ${fanTheme}. Вживись в роль, температура
            генерации на 100. Заданы следующие условия:
            соотнощение врагоы следующие:
            эльдары ${eldarNum}%
            хаоситов ${chaosNum}%
            тираниды ${tyranidNums}%
            критиков с форума ${forumKritiks}%

            при ${thisHeresyDidNotBe} такой ереси не было
            главные герои будут ${marinesWillDo}
            величина пафоса будет ${numOfPathos}%
            уровень знания бэкграунда вселенной вархаммер это ${levelOfBgKnowledge}
            противники будут ${enemyReaction}
            статистика вселенной это ${statisticKnowledge}
            нет оружия массового поражения - ${isNotMassWeapon}
            нет артилерии - ${isNotMassWeapon}
            `

                var topDiv = $("<div></div>")
                    .addClass("topDiv")
                    .appendTo("body");

                var newWindow = $("<div></div>")
                    .addClass("content topWindow")
                    .appendTo($(".topDiv"));

                newWindow.append($("<p>чтобы написать свою фан историю пройдите нв <a href='http://chat.deepseek.com'>chat.deepseek.com</a> и вставьте промпт ниже</p>"))
                newWindow.append($(`<p><textarea>${prompt}</textarea></p>`))

                const button = $('<button>Copy to clipboard</button>');

                // Назначаем обработчик клика
                button.on('click', () => {
                  navigator.clipboard.writeText(prompt)
                    .then(() => {
                      alert('Текст скопирован в буфер обмена!');
                    })
                    .catch(err => {
                      alert('Ошибка при копировании: ' + err);
                    });
                });

                // Добавляем кнопку в новый элемент и в окно
                newWindow.append($('<div></div>').append(button));

                }
        )
    }
)
