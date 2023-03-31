# About

@ngx-tc/alert is an Angular library that provides developers with the ability to easily create alerts in their applications. The library is designed to be easy to use and customizable, allowing developers to quickly and easily create alerts that fit their specific needs.

The library includes a number of pre-built alert templates, which can be easily customized to fit the specific requirements of your application. These templates include standard alert types such as success, warning, error, and info, as well as more complex templates such as confirmation dialogs and notifications.

The library is built using Angular. It is designed to be lightweight and easy to use, with minimal setup required to get started. Overall, @ngx-tc/alert is a powerful and flexible library that provides developers with the tools they need to create effective and customizable alerts for their Angular applications.

## Usage

Install `@ngx-tc/alert` in your project:

```
npm install @ngx-tc/alert
```

Import `TcAlertModule` e.g. in your `app.module.ts`:
```typescript
import { TcAlertModule } from '@ngx-tc/alert';

@NgModule({
  imports: [
    ...
      TcAlertModule
  ],
})
export class AppModule {}
```

Use the `@ngx-tc/alert` component in you app:
```html
<tc-alert>
  Alert content
</tc-alert>
```

## Demo
To view a working demo of the library in action, please follow the provided link. The demo will allow you to explore the various components and features included in this library and see how they can be used in your Angular applications.
[http://tc-library.type-code.pro/#/components/alerts](http://tc-library.type-code.pro/#/components/alerts)
