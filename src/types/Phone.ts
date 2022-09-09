export interface PhoneType {
    flags: Flags
    name: Name
    idd: Idd
  }
  
  export interface Flags {
    png: string
    svg: string
  }
  
  export interface Name {
    common: string
    official: string
    nativeName: NativeName
  }
  
  export interface NativeName {
    ara: Ara
  }
  
  export interface Ara {
    official: string
    common: string
  }
  
  export interface Idd {
    root: string
    suffixes: string[]
  }