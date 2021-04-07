//
// Tag.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
import AnyCodable

/** A tag for a pet */
public struct Tag: Codable, Hashable {

    public var id: Int64?
    public var name: String?

    public init(id: Int64? = nil, name: String? = nil) {
        self.id = id
        self.name = name
    }

}
