// Импортируем компонент
import radio from '../components/radio.vue';

// Экспортируем объект с метаданными
export default {
  title: 'radio', // Заголовок для историй
  component: radio, // Компонент, который мы тестируем
};

// История для кнопки с текстом "Привет, мир!"
export const HelloWorld = () => ({
  components: { radio },
  template: '<radio :label="\'Hello, World!\'" />',
});

// История для кнопки с другим текстом
export const AnotherText = () => ({
  components: { radio },
  template: '<radio :label="\'Another Text\'" />',
});