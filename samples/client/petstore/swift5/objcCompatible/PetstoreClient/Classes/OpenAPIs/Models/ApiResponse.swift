//
// ApiResponse.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
import AnyCodable

@objc public class ApiResponse: NSObject, Codable {

    public var code: Int?
    public var codeNum: NSNumber? {
        get {
            return code as NSNumber?
        }
    }
    public var type: String?
    public var message: String?

    public init(code: Int? = nil, type: String? = nil, message: String? = nil) {
        self.code = code
        self.type = type
        self.message = message
    }

}
