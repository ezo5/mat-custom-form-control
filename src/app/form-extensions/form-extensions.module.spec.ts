import { FormExtensionsModule } from './form-extensions.module';

describe('FormExtensionsModule', () => {
  let formExtensionsModule: FormExtensionsModule;

  beforeEach(() => {
    formExtensionsModule = new FormExtensionsModule();
  });

  it('should create an instance', () => {
    expect(formExtensionsModule).toBeTruthy();
  });
});
