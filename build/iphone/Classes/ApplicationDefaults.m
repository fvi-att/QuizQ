/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"v8"] forKey:@"ti.android.runtime"];
    [_property setObject:[TiUtils stringValue:@"qocryb4EFuWH2TShVECBXht4nX0e8Z89"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"sys5x5vA0rpddWKrS8ll6TU0xTl7wjj9"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"0VmTBmEnR04JaL6RbAC98wrmwSKWsYru"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"klortVoPmCdE6WtqQjJfGfZsijWSH9DT"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"AqUPnCkrzk7iHb1sf5DVkboAjlIzpMQD"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"BfoWoMRclEOytZr6rb7rilmjBugpXtvm"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
