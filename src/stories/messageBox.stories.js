// Импортируем компонент
import messageBox from '../components/messageBox.vue';

// Экспортируем объект с метаданными
export default {
  title: 'messageBox', // Заголовок для историй
  component: messageBox, // Компонент, который мы тестируем
};

// История для кнопки с текстом "Привет, мир!"
export const HelloWorld = () => ({
  components: { messageBox },
  template: '<messageBox :label="\'Hello, World!\'" />',
});

// История для кнопки с другим текстом
export const AnotherText = () => ({
  components: { messageBox },
  template: '<messageBox :label="\'Another Text\'" />',
});