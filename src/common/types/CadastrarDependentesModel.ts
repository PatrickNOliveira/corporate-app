export interface CadastrarDependentesResponse {
    extraInfo: string
    halfPrice: boolean
    companyId: number
    name: string
    insuredClient: InsuredClient
    flgContrata: string
    insuredClientId: number
    isActive: boolean
    id: number
    createdAt: string
    updatedAt: string
}

export interface InsuredClient {
    id: number
    hash: string
    name: string
    contactName: any
    email: any
    doc: string
    docType: number
    nationality: string
    birthDate: string
    phone: any
    contactPhone: any
    createdAt: string
    updatedAt: string
    lastRegAt: string
    isActive: boolean
    companyId: number
    pdvId: any
    tosStatus: string
    cadOnline: string
    extraInfo: string
    isAssociate: boolean
    associateStartDate: string
    associateEndDate: string
    invitations: number
    usedInvitations: number
    selfieUrl: string
    onlyDependants: boolean
    halfPrice: boolean
    InsuredClientDependants: InsuredClientDependant[]
    insuredClientActivities: any[]
}

export interface InsuredClientDependant {
    id: number
    name: string
    extraInfo: string
    createdAt: string
    updatedAt: string
    isActive: boolean
    insuredClientId: number
    companyId: number
    flgContrata: string
    halfPrice: boolean
    insuredClientActivities: any[]
    eventoToInsuredClients: any[]
}


export interface CadastrarDependentesContract {
    name: string
    extraInfo: string
}
