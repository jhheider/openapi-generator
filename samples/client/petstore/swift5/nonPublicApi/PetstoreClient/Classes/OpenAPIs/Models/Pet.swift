//
// Pet.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
import AnyCodable

internal struct Pet: Codable, Hashable {

    internal enum Status: String, Codable, CaseIterable {
        case available = "available"
        case pending = "pending"
        case sold = "sold"
    }
    internal var id: Int64?
    internal var category: Category?
    internal var name: String
    internal var photoUrls: [String]
    internal var tags: [Tag]?
    /** pet status in the store */
    internal var status: Status?

    internal init(id: Int64? = nil, category: Category? = nil, name: String, photoUrls: [String], tags: [Tag]? = nil, status: Status? = nil) {
        self.id = id
        self.category = category
        self.name = name
        self.photoUrls = photoUrls
        self.tags = tags
        self.status = status
    }

}
