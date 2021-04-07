//
// MapTest.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
import AnyCodable

@objc public class MapTest: NSObject, Codable {

    public enum MapOfEnumString: String, Codable, CaseIterable {
        case upper = "UPPER"
        case lower = "lower"
    }
    public var mapMapOfString: [String: [String: String]]?
    public var mapOfEnumString: [String: String]?
    public var directMap: [String: Bool]?
    public var indirectMap: StringBooleanMap?

    public init(mapMapOfString: [String: [String: String]]? = nil, mapOfEnumString: [String: String]? = nil, directMap: [String: Bool]? = nil, indirectMap: StringBooleanMap? = nil) {
        self.mapMapOfString = mapMapOfString
        self.mapOfEnumString = mapOfEnumString
        self.directMap = directMap
        self.indirectMap = indirectMap
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case mapMapOfString = "map_map_of_string"
        case mapOfEnumString = "map_of_enum_string"
        case directMap = "direct_map"
        case indirectMap = "indirect_map"
    }

}
