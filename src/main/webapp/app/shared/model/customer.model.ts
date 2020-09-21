import { IUser } from 'app/core/user/user.model';
import { IProductOrder } from 'app/shared/model/product-order.model';
import { Gender } from 'app/shared/model/enumerations/gender.model';

export interface ICustomer {
  id?: number;
  firstName?: string;
  lastName?: string;
  gender?: Gender;
  email?: string;
  phone?: string;
  addressLineOne?: string;
  addressLineTwo?: string;
  city?: string;
  country?: string;
  user?: IUser;
  orders?: IProductOrder[];
}

export class Customer implements ICustomer {
  constructor(
    public id?: number,
    public firstName?: string,
    public lastName?: string,
    public gender?: Gender,
    public email?: string,
    public phone?: string,
    public addressLineOne?: string,
    public addressLineTwo?: string,
    public city?: string,
    public country?: string,
    public user?: IUser,
    public orders?: IProductOrder[]
  ) {}
}
