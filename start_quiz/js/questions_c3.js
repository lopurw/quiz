const questions = [
    {
        question: "Что такое метапрограммирование в контексте C#?",
        answer: "Техника написания программ, которые могут создавать, изменять или оптимизировать свой собственный исходный код во время компиляции или выполнения.",
        options: [
            "Программирование с использованием металлических инструментов",
            "Техника написания программ, которые могут создавать, изменять или оптимизировать свой собственный исходный код во время компиляции или выполнения.",
            "Программирование с использованием металлических сплавов",
            "Методология программирования с использованием метафор"
           
        ]
    },
    {
        question: "Что такое монада в функциональном программировании, и как она применяется в C#?",
        answer: "Монада - это концепция функционального программирования, представляющая собой монадический тип данных, который предоставляет механизм композиции функций. ",
        options: [
            "Монада - это паттерн проектирования",
            "Монада - это алгоритм шифрования",
            "Монада - это концепция функционального программирования, представляющая собой монадический тип данных, который предоставляет механизм композиции функций. ",
            "Монада - это тип данных для работы с многозадачностью",
            "Монада - это система для работы с параллельными вычислениями"
        ]
    },
    {
        question: "Что такое лямбда-выражение в C# и для чего оно используется?",
        answer: "Лямбда-выражение - это краткий синтаксис для создания анонимных методов (функций). Оно используется для передачи функций как аргументов в другие функции, а также для создания делегатов и использования в LINQ-запросах.",
        options: [
            "Лямбда-выражение - это специальный вид условного оператора",
            "Лямбда-выражение - это название нового типа данных",
            "Лямбда-выражение - это средство для работы с исключениями",
            "Лямбда-выражение - это краткий синтаксис для создания анонимных методов (функций). Оно используется для передачи функций как аргументов в другие функции, а также для создания делегатов и использования в LINQ-запросах.",
            "Лямбда-выражение - это инструкция для работы с потоками данных"
        ]
    },
    {
        question: "Как работает garbage collector в C#?",
        answer: "Garbage Collector - это автоматическая система управления памятью в C#, которая отслеживает неиспользуемые объекты и освобождает память, занимаемую ими, чтобы избежать утечек памяти.",
        options: [
            "Garbage Collector - это средство для создания новых объектов",
            "Garbage Collector - это инструкция для ручного освобождения памяти",
            "Garbage Collector - это система для управления цветами на экране",
            "Garbage Collector - это автоматическая система управления памятью в C#, которая отслеживает неиспользуемые объекты и освобождает память, занимаемую ими, чтобы избежать утечек памяти.",
            "Garbage Collector - это спецификация для работы с сетевыми устройствами"
        ]
    },
    {
        question: "Что такое асинхронное программирование в C#?",
        answer: "Асинхронное программирование - это подход, который позволяет выполнять асинхронные операции без блокировки основного потока выполнения. Он используется для улучшения производительности при работе с вводом/выводом и сетевыми операциями.",
        options: [
            "Асинхронное программирование - это способ создания асинхронных алгоритмов",
            "Асинхронное программирование - это метод для решения проблем с памятью",
            "Асинхронное программирование - это подход, который позволяет выполнять асинхронные операции без блокировки основного потока выполнения. Он используется для улучшения производительности при работе с вводом/выводом и сетевыми операциями.",
            "Асинхронное программирование - это спецификация для работы с графикой",
            "Асинхронное программирование - это метод для создания асинхронных пользовательских интерфейсов"
        ]
    },
    {
        question: "Что такое многозадачность (multithreading) в C#?",
        answer: "Многозадачность - это способность программы выполнять несколько потоков одновременно, улучшая общую производительность и отзывчивость приложения.",
        options: [
            "Многозадачность - это метод для работы с сетевыми соединениями",
            "Многозадачность - это средство для создания анимации",
            "Многозадачность - это способность программы выполнять несколько потоков одновременно, улучшая общую производительность и отзывчивость приложения.",
            "Многозадачность - это инструмент для решения математических задач",
            "Многозадачность - это метод для создания асинхронных запросов к базе данных"
        ]
    },
    {
        question: "Что такое аспектно-ориентированное программирование (AOP) в C#?",
        answer: "AOP - это парадигма программирования, в которой основное внимание уделяется аспектам, т.е. модулям программы, которые предоставляют сквозное исполнение функциональности.",
        options: [
            "AOP - это язык программирования",
            "AOP - это библиотека для работы с графикой",
            "AOP - это метод для создания асинхронных алгоритмов",
            "AOP - это парадигма программирования, в которой основное внимание уделяется аспектам, т.е. модулям программы, которые предоставляют сквозное исполнение функциональности.",
            "AOP - это система для управления распределенными вычислениями"
        ]
    },
    {
        question: "Что такое рефлексия (reflection) в C#?",
        answer: "Рефлексия - это способность программы анализировать свою структуру и манипулировать своими элементами во время выполнения.",
        options: [
            "Рефлексия - это метод для создания отражений в воде",
            "Рефлексия - это инструмент для работы с геометрическими фигурами",
            "Рефлексия - это средство для создания анимации",
            "Рефлексия - это способность программы анализировать свою структуру и манипулировать своими элементами во время выполнения.",
            "Рефлексия - это метод для решения дифференциальных уравнений"
        ]
    },
    {
        question: "Что такое параллельное программирование в C#?",
        answer: "Параллельное программирование - это методология программирования, которая позволяет выполнять несколько задач одновременно с использованием многозадачности и параллельных вычислений.",
        options: [
            "Параллельное программирование - это метод для создания параллельных вселенных",
            "Параллельное программирование - это спецификация для работы с сетями",
            "Параллельное программирование - это методология программирования, которая позволяет выполнять несколько задач одновременно с использованием многозадачности и параллельных вычислений.",
            "Параллельное программирование - это инструмент для создания красочных изображений",
            "Параллельное программирование - это метод для работы с многозадачностью"
        ]
    },
    {
        question: "Что такое реактивное программирование (Rx) в C#?",
        answer: "Реактивное программирование - это парадигма программирования, ориентированная на работу с потоками данных и событиями.",
        options: [
            "Реактивное программирование - это метод для создания реакций на пользовательские действия",
            "Реактивное программирование - это язык программирования",
            "Реактивное программирование - это метод для работы с параллельными вычислениями",
            "Реактивное программирование - это парадигма программирования, ориентированная на работу с потоками данных и событиями.",
            "Реактивное программирование - это инструмент для создания анимированных пользовательских интерфейсов"
        ]
    
},
];