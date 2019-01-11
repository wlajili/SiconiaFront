import { EventEmitter, Output, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { StoreActionValues } from './enum/store-action.enum';

/**
 * Abstract Generic Form
 *
 * @export
 * @abstract
 * @class AbstractGenericFormComponent
 * @template T entity type
 * @author Maroua BOUKHDHIR
 */
export abstract class AbstractGenericFormComponent<T> implements OnInit {
  @Output()
  submitFormEvent: EventEmitter<T> = new EventEmitter<T>();

  @Output()
  saveFormEvent: EventEmitter<T> = new EventEmitter<T>();

  @Output()
  resetFormEvent: EventEmitter<any> = new EventEmitter<any>();

  formGroup: FormGroup;

  currentSelectedEntity: T;

  formBuilder: FormBuilder;

  disabled: boolean;

  toastService: any;

  constructor(formBuilder: FormBuilder, toast: ToastrService) {
    this.formBuilder = formBuilder;
    this.toastService = toast;
  }

  public ngOnInit() {
    this.initializeData();
    this.initializeForm();
}

  abstract buildForm(): void;
  abstract initializeData(): void;
  abstract updateForm(formValue: T);

  public initializeForm() {
    this.buildForm();
  }

  disabledFormInputs(disabled: boolean) {
    Object.keys(this.formGroup.controls).forEach(key => {
      disabled
        ? this.formGroup.controls[key].disable()
        : this.formGroup.controls[key].enable();
    });
    this.disabled = disabled;
  }

  markControlsAsDirty(form: FormGroup | FormArray) {
    Object.keys(form.controls).forEach(key => {
      if (
        form.controls[key] instanceof FormArray ||
        form.controls[key] instanceof FormGroup
      ) {
        this.markControlsAsDirty(<FormArray>form.controls[key]);
      }
      form.controls[key].markAsDirty();
    });
  }

  onSubmit(form: FormGroup) {
    this.submitFormEvent.emit(form.value);
  }

  /**
   * Clean the form array elements which was added by the tables
   *
   * @param {any} formGroup form group that contains the array to clean
   * @param {string} formArrayName name of the form array
   * @memberof AbstractGenericFormComponent
   */
  cleanFormArray(formGroup: any, formArrayName: string) {
    // const array = (<FormArray>(formGroup).controls[formArrayName]).controls;
    // for (let i = 0; i < array.length; i++) {
    //   array.removeAt(i);
    // }
    const formArray = <FormArray>formGroup.controls[formArrayName];
    if (formArray && formArray.length) {
      do {
        formArray.removeAt(0);
      } while (formArray.length > 0);
    }
  }

  /**
   * Clean the form array elements which was added by the tables
   *
   * @param {any} formGroup form group that contains the array to clean
   * @param {string} formArrayName name of the form array
   * @memberof AbstractGenericFormComponent
   */
  cleanFormGroup(formGroup: any, formGroupName: string) {
    (<FormGroup>formGroup).removeControl(formGroupName);
    //(<FormGroup>formGroup).addControl(formGroupName, new FormGroup({}));
  }

  /**
   * when updating a from Angular Check using the function
   * checkAllValuesPresent that there's no null value
   *
   * @public
   * @param {*} value a nullable property
   * @returns
   * @memberof AbstractGenericFormComponent
   */
  public nullableValue(value: any) {
    return value ? value : '';
  }

  /**
   *
   *
   * @protected
   * @param {*} value
   * @returns
   * @memberof AbstractGenericFormComponent
   */
  protected nullableFormArrayValue(value: any) {
    return value ? value : [];
  }
  /**
   *
   *
   * @protected
   * @param {*} value
   * @returns
   * @memberof AbstractGenericFormComponent
   */
  protected nullableFormObject(value: any) {
    return value ? value : {};
  }
  /**
   *
   *
   * @protected
   * @param {*} value
   * @returns
   * @memberof AbstractGenericFormComponent
   */
  protected nullableFromBooleanValue(value: any) {
    return value ? value : false;
  }

  protected showNotification(
    entity: T,
    action: StoreActionValues,
    response: any,
    section?: string) {
      if (response instanceof HttpErrorResponse) {
        switch (action) {
            case StoreActionValues.ADD: {
                this.toastService.error(this.failMessage(entity, action, section, response['error'])
                , this.getFailMessageTitle(response['error']['code']));
                break;
            }
            case StoreActionValues.UPDATE: {
                this.toastService.error(this.failMessage(entity, action, section, response['error'])
                , this.getFailMessageTitle(response['error']['code']));
                break;
            }
            case StoreActionValues.REMOVE: {
                this.toastService.error(this.failMessage(entity, action, section, response['error'])
                , this.getFailMessageTitle(response['error']['code']));
                break;
            }
        }
    } else {
        switch (action) {
            case StoreActionValues.ADD: {
                this.toastService.success(this.successMessage(entity, action, section), 'Congrats');
                break;
            }
            case StoreActionValues.UPDATE: {
                this.toastService.success(this.successMessage(entity, action, section), 'Congrats');
                break;
            }
            case StoreActionValues.REMOVE: {
                this.toastService.success(this.successMessage(entity, action, section), 'Congrats');
                break;
            }
        }
    }
}


protected successMessage(entity: T, action: any, section: string = 'record'): string {
  /*
      override this method in your component and copy the current content
      because it will be abstract in the future
  */
  switch (action) {
      case StoreActionValues.ADD: {
        console.log(`Your ${section} identified by ${entity['id']} has been created !`);
        return `Your ${section} identified by ${entity['id']} has been created !`;
      }
      case StoreActionValues.UPDATE: {
        console.log(`Your ${section} identified by ${entity['id']} is updated !`);
        return `Your ${section} identified by ${entity['id']} is updated !`;
      }
      case StoreActionValues.REMOVE: {
        console.log(`Your ${section} identified by ${entity['id']} is deleted !`);
          return `Your ${section} identified by ${entity['id']} is removed !`;
      }
  }
}

protected failMessage(entity: T, action: any, section: string = 'record', error: any): string {
  /*
     override this method in your component and copy the current content
     because it will be abstract in the future
 */
  switch (action) {
      case StoreActionValues.ADD: {
        console.log(`Fail to add ${section} identified by ${entity['id']}: ${error.message}`);
        return  `Unable to add ${section}: ${error.message}`;
      }
      case StoreActionValues.UPDATE: {
        console.log(`Fail to update ${section} identified by ${entity['id']}: ${error.message}`);
        return `Unable to update ${section}: ${error.message}`;
      }
      case StoreActionValues.REMOVE: {
        console.log(`Unable to remove ${section} identified by ${entity['id']}: ${error.message}`);
        return `Unable to remove ${section}: ${error.message}`;
      }
  }
}

protected getFailMessageTitle(code): string {
  return code === 400 ? 'Validation failed: ' : 'Bad request: ';
}

}
