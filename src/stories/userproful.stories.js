import userproful from '../components/userproful.vue';

export default {
  title: 'userproful', // Заголовок для историй
  component: userproful, // Компонент, который мы тестируем
};

// История для кнопки с текстом "Привет, мир!"
export const HelloWorld = () => ({
  components: { userproful },
  template: '<userproful :label="\'Hello, World!\'" />',
});

// История для кнопки с другим текстом
export const AnotherText = () => ({
  components: { userproful},
  template: '<userproful :label="\'Another Text\'" />',
});
