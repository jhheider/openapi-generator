//
// ArrayOfArrayOfNumberOnly.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
import AnyCodable

public struct ArrayOfArrayOfNumberOnly: Codable, Hashable {

    public private(set) var arrayArrayNumber: [[Double]]?

    public init(arrayArrayNumber: [[Double]]? = nil) {
        self.arrayArrayNumber = arrayArrayNumber
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case arrayArrayNumber = "ArrayArrayNumber"
    }

}
