// Импортируем компонент
import modalWindow from '../components/modalWindow.vue';

// Экспортируем объект с метаданными
export default {
  title: 'modalWindow', // Заголовок для историй
  component: modalWindow, // Компонент, который мы тестируем
};

// История для кнопки с текстом "Привет, мир!"
export const HelloWorld = () => ({
  components: { modalWindow },
  template: '<modalWindow :label="\'Hello, World!\'" />',
});

// История для кнопки с другим текстом
export const AnotherText = () => ({
  components: { modalWindow },
  template: '<modalWindow :label="\'Another Text\'" />',
});