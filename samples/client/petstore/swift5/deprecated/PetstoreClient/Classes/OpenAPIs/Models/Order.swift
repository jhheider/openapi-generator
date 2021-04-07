//
// Order.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
import AnyCodable

/** An order for a pets from the pet store */
@available(*, deprecated, message: "This schema is deprecated.")
public struct Order: Codable, Hashable {

    public enum Status: String, Codable, CaseIterable {
        case placed = "placed"
        case approved = "approved"
        case delivered = "delivered"
    }
    public var id: Int64?
    public var petId: Int64?
    public var quantity: Int?
    public var shipDate: Date?
    /** Order Status */
    public var status: Status?
    public var complete: Bool? = false

    public init(id: Int64? = nil, petId: Int64? = nil, quantity: Int? = nil, shipDate: Date? = nil, status: Status? = nil, complete: Bool? = false) {
        self.id = id
        self.petId = petId
        self.quantity = quantity
        self.shipDate = shipDate
        self.status = status
        self.complete = complete
    }

}
