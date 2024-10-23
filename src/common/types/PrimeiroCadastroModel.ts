export interface PrimeiroCadastroContract {
    birthDate: string
    companyHash: string
    contactName: string
    contactPhone: string
    doc: string
    docType: number
    email: string
    isConnected: boolean
    name: string
    nationality: string
    onlyDependants: boolean
    pdvId: any
    phone: string
    status: string
}

export interface PrimeiroCadastroResponse {
    insuredClient: InsuredClient
    flgConsulta: boolean
}

export interface InsuredClient {
    companyId: number
    name: string
    doc: string
    birthDate: string
    docType: number
    nationality: string
    onlyDependants: boolean
    halfPrice: boolean
    pdvId: any
    cadOnline: string
    hash: string
    contactName: any
    email: any
    phone: any
    contactPhone: any
    isActive: boolean
    tosStatus: string
    extraInfo: any
    isAssociate: boolean
    invitations: number
    usedInvitations: number
    selfieUrl: any
    id: number
    createdAt: string
    updatedAt: string
    lastRegAt: string
    associateStartDate: string
    associateEndDate: string
}
