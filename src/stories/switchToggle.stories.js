// Импортируем компонент
import switchToggle from '../components/switchToggle.vue';

// Экспортируем объект с метаданными
export default {
  title: 'switchToggle', // Заголовок для историй
  component: switchToggle, // Компонент, который мы тестируем
};

// История для кнопки с текстом "Привет, мир!"
export const HelloWorld = () => ({
  components: { switchToggle },
  template: '<switchToggle :label="\'Hello, World!\'" />',
});

// История для кнопки с другим текстом
export const AnotherText = () => ({
  components: { switchToggle },
  template: '<switchToggle :label="\'Another Text\'" />',
});