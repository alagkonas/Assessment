type CompanyTypes = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type GeoTypes = {
  lat: string;
  lng: string;
};

type AddressTypes = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoTypes;
};

export type ApiUsersTypes = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressTypes;
  phone: '1-770-736-8031 x56442';
  website: 'hildegard.org';
  company: CompanyTypes;
};

export type userInitialStateTypes = {
  authUser: string | null;
  users: ApiUsersTypes[] | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: any;
};
