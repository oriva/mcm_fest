<?
    $to = 'info@irkmedia.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Заявка с сайта Фестиваля МСМ!'; //Заголовок сообщения
    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Форма:'.$_POST['type']'</p>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                        <p>Почта: '.$_POST['email'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: fest.mcm.fm <info@mcm.fm>\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
?>
