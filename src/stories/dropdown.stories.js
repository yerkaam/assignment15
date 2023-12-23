// Импортируем компонент
import dropdown from '../components/dropdown.vue';

// Экспортируем объект с метаданными
export default {
  title: 'dropdown', // Заголовок для историй
  component:dropdown, // Компонент, который мы тестируем
};

// История для кнопки с текстом "Привет, мир!"
export const HelloWorld = () => ({
  components: {dropdown },
  template: '<dropdown :label="\'Hello, World!\'" />',
});

// История для кнопки с другим текстом
export const AnotherText = () => ({
  components: {dropdown },
  template: '<dropdown :label="\'Another Text\'" />',
});