const questions = [
  {
      question: "Как работает механизм сериализации в Java?",
      answer: "Сериализация в Java позволяет объектам быть преобразованными в поток байтов для сохранения в файле или передачи по сети.",
      options: [
          "Сериализация в Java используется для рефакторинга кода.",
          "Сериализация в Java позволяет объектам быть преобразованными в поток байтов для сохранения в файле или передачи по сети.",
          "Сериализация в Java является средством оптимизации работы с памятью.",
          "Сериализация в Java предотвращает утечки памяти.",
          "Сериализация в Java применяется только для объектов примитивных типов."
      ]
  },
  {
      question: "Что такое дженерики (generics) в Java и как они используются?",
      answer: "Дженерики в Java предоставляют возможность создавать классы и методы, которые могут работать с любыми типами данных.",
      options: [
          "Дженерики в Java - это библиотека для работы с изображениями.",
          "Дженерики в Java позволяют создавать универсальные базы данных.",
          "Дженерики в Java - это механизм для создания графических интерфейсов.",
          "Дженерики в Java предоставляют возможность создавать классы и методы, которые могут работать с любыми типами данных.",
          "Дженерики в Java применяются только для работы с коллекциями."
      ]
  },
  {
      question: "Как работает garbage collector в Java?",
      answer: "Garbage collector в Java автоматически удаляет объекты, которые больше не используются, освобождая таким образом память.",
      options: [
          "Garbage collector в Java является механизмом для управления потоками ввода/вывода.",
          "Garbage collector в Java используется для шифрования данных.",
          "Garbage collector в Java автоматически удаляет объекты, которые больше не используются, освобождая таким образом память.",
          "Garbage collector в Java предотвращает переполнение стека вызовов.",
          "Garbage collector в Java работает только в ручном режиме."
      ]
  },
  {
      question: "Как работает многозадачность (multithreading) в Java?",
      answer: "Многозадачность в Java позволяет выполнять несколько задач одновременно, каждая задача выполняется в отдельном потоке.",
      options: [
          "Многозадачность в Java - это механизм для автоматического тестирования кода.",
          "Многозадачность в Java ограничивается одним потоком выполнения.",
          "Многозадачность в Java позволяет выполнять несколько задач одновременно, каждая задача выполняется в отдельном потоке.",
          "Многозадачность в Java работает только в сетевых приложениях.",
          "Многозадачность в Java используется только для работы с графикой."
      ]
  },
  {
      question: "Что такое аннотации (annotations) в Java и как они используются?",
      answer: "Аннотации в Java предоставляют метаданные, которые могут быть использованы компилятором или другими инструментами.",
      options: [
          "Аннотации в Java - это способ создания графических элементов.",
          "Аннотации в Java используются только для работы с файлами.",
          "Аннотации в Java предоставляют метаданные, которые могут быть использованы компилятором или другими инструментами.",
          "Аннотации в Java служат только для создания алгоритмов.",
          "Аннотации в Java применяются только в сетевых приложениях."
      ]
  },
  {
      question: "Что такое лямбда-выражения (lambda expressions) в Java?",
      answer: "Лямбда-выражения в Java предоставляют возможность компактно выражать анонимные функции.",
      options: [
          "Лямбда-выражения в Java - это способ создания графических элементов.",
          "Лямбда-выражения в Java используются только для работы с базами данных.",
          "Лямбда-выражения в Java предоставляют возможность компактно выражать анонимные функции.",
          "Лямбда-выражения в Java служат только для работы с текстовыми файлами.",
          "Лямбда-выражения в Java применяются только в многозадачных приложениях."
      ]
  },
  {
      question: "Что такое Java NIO (New I/O) и в чем его преимущества?",
      answer: "Java NIO предоставляет альтернативный способ обработки ввода-вывода, основанный на буферах и каналах.",
      options: [
          "Java NIO - это библиотека для работы с изображениями.",
          "Java NIO используется только для работы с звуковыми файлами.",
          "Java NIO предоставляет альтернативный способ обработки ввода-вывода, основанный на буферах и каналах.",
          "Java NIO работает только в сетевых приложениях.",
          "Java NIO применяется только для создания графических интерфейсов."
      ]
  },
  {
      question: "Что такое JPA (Java Persistence API) и как оно используется?",
      answer: "Java Persistence API предоставляет стандартный способ управления отношениями объектно-реляционной базы данных в Java-приложениях.",
      options: [
          "JPA в Java - это язык программирования для создания веб-приложений.",
          "JPA используется только для работы с XML-файлами.",
          "Java Persistence API предоставляет стандартный способ управления отношениями объектно-реляционной базы данных в Java-приложениях.",
          "JPA применяется только в многозадачных приложениях.",
          "JPA - это библиотека для работы с аудиофайлами."
      ]
  },
  {
      question: "Что такое Java Security и как она используется для обеспечения безопасности приложений?",
      answer: "Java Security предоставляет механизмы для обеспечения безопасности приложений, такие как контроль доступа и шифрование.",
      options: [
          "Java Security - это инструмент для оптимизации кода.",
          "Java Security используется только для работы с графическими элементами.",
          "Java Security предоставляет механизмы для обеспечения безопасности приложений, такие как контроль доступа и шифрование.",
          "Java Security работает только в сетевых приложениях.",
          "Java Security применяется только для работы с текстовыми файлами."
      ]
  },
  {
      question: "Как работает HotSpot JVM в Java?",
      answer: "HotSpot JVM в Java - это виртуальная машина, оптимизированная для выполнения кода на Java с использованием технологии Just-In-Time (JIT) компиляции.",
      options: [
          "HotSpot JVM в Java - это среда разработки для создания мобильных приложений.",
          "HotSpot JVM применяется только для работы с базами данных.",
          "HotSpot JVM в Java - это виртуальная машина, оптимизированная для выполнения кода на Java с использованием технологии Just-In-Time (JIT) компиляции.",
          "HotSpot JVM используется только в веб-приложениях.",
          "HotSpot JVM - это библиотека для работы с изображениями."
      ]
  },
  {
      question: "Какие нововведения вводит Java 9?",
      answer: "Java 9 включает в себя модульную систему, улучшения в JShell, улучшения в API коллекций, Reactive Streams и другие нововведения.",
      options: [
          "Java 9 - это язык программирования для создания мобильных приложений.",
          "Java 9 применяется только для работы с графикой.",
          "Java 9 включает в себя модульную систему, улучшения в JShell, улучшения в API коллекций, Reactive Streams и другие нововведения.",
          "Java 9 используется только для работы с базами данных.",
          "Java 9 - это библиотека для работы с аудиофайлами."
      ]
  },
];

