export type ConsultaType = "Basic" | "Medium" | "High";

export interface Consulta {
  uid?: string;
  psid?: string;
  basic?: string;
  high?: number;
  medium?: number;
  pid?: number;
  k2?: number;
  full_psid?: string;
  createdAt?: any;
  updateAt?: any;
  type?: string;
  like?: number;
  unlike?: number;
}
