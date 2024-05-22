import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { validate_cpf, validate_cnpj } from "js-brasil/src/validate";

export function validatorPassword() : ValidatorFn{
    return  (control: AbstractControl) => {
        const value = control.value;
        
        if(!value){
            return null;  
        }

        const hasNumber = /\d/.test(value);
        const hasUpper = /[A-Z]/.test(value);
        const hasLower = /[a-z]/.test(value);

        const valid = hasNumber && hasUpper && hasLower;

        return valid ? null :  {validatePassword: true}
    }

}

export function validatorDateRange() : ValidatorFn{
    return  (control: AbstractControl): ValidationErrors | null => {
        const startAt = control.get("startAt")?.value;
        const endAt = control.get('endstartAt')?.value;

        if(!startAt || !endAt){
            return null;
        }

        return (endAt.getTime() - startAt.getTime() > 0) ? null : {dateRange: true};
    }
}

export function validatorCPF() : ValidatorFn{
    return  (control: AbstractControl) => {
        const value = control.value;
        
        if(!value){
            return null;  
        }
        const isCpf = validate_cpf(value);

        return isCpf ? null :  {validateCpf: true}
    }
}

export function validatorCNPJ() : ValidatorFn{
    return  (control: AbstractControl) => {
        const value = control.value;
        
        if(!value){
            return null;  
        }
        const isCnpj = validate_cnpj(value);

        return isCnpj ? null :  {validateCnpj: true}
    }
}