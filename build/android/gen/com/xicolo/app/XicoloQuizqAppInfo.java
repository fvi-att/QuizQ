package com.xicolo.app;

import org.appcelerator.titanium.ITiAppInfo;
import org.appcelerator.titanium.TiApplication;
import org.appcelerator.titanium.TiProperties;
import org.appcelerator.kroll.common.Log;

/* GENERATED CODE
 * Warning - this class was generated from your application's tiapp.xml
 * Any changes you make here will be overwritten
 */
public final class XicoloQuizqAppInfo implements ITiAppInfo
{
	private static final String LCAT = "AppInfo";
	
	public XicoloQuizqAppInfo(TiApplication app) {
		TiProperties properties = app.getSystemProperties();
		TiProperties appProperties = app.getAppProperties();
					
					properties.setString("acs-api-key-production", "BfoWoMRclEOytZr6rb7rilmjBugpXtvm");
					appProperties.setString("acs-api-key-production", "BfoWoMRclEOytZr6rb7rilmjBugpXtvm");
					
					properties.setString("acs-api-key-development", "BfoWoMRclEOytZr6rb7rilmjBugpXtvm");
					appProperties.setString("acs-api-key-development", "BfoWoMRclEOytZr6rb7rilmjBugpXtvm");
					
					properties.setString("acs-oauth-secret-development", "klortVoPmCdE6WtqQjJfGfZsijWSH9DT");
					appProperties.setString("acs-oauth-secret-development", "klortVoPmCdE6WtqQjJfGfZsijWSH9DT");
					
					properties.setString("ti.deploytype", "production");
					appProperties.setString("ti.deploytype", "production");
					
					properties.setString("ti.ui.defaultunit", "system");
					appProperties.setString("ti.ui.defaultunit", "system");
					
					properties.setString("ti.android.runtime", "v8");
					appProperties.setString("ti.android.runtime", "v8");
					
					properties.setString("acs-oauth-secret-production", "klortVoPmCdE6WtqQjJfGfZsijWSH9DT");
					appProperties.setString("acs-oauth-secret-production", "klortVoPmCdE6WtqQjJfGfZsijWSH9DT");
					
					properties.setString("acs-oauth-key-development", "AqUPnCkrzk7iHb1sf5DVkboAjlIzpMQD");
					appProperties.setString("acs-oauth-key-development", "AqUPnCkrzk7iHb1sf5DVkboAjlIzpMQD");
					
					properties.setString("acs-oauth-key-production", "AqUPnCkrzk7iHb1sf5DVkboAjlIzpMQD");
					appProperties.setString("acs-oauth-key-production", "AqUPnCkrzk7iHb1sf5DVkboAjlIzpMQD");
	}
	
	public String getId() {
		return "com.xicolo.app";
	}
	
	public String getName() {
		return "xicolo    QuizQ";
	}
	
	public String getVersion() {
		return "0.5";
	}
	
	public String getPublisher() {
		return "fvi@";
	}
	
	public String getUrl() {
		return "http://xicolo.com/wordpress";
	}
	
	public String getCopyright() {
		return "2012 by xicolo";
	}
	
	public String getDescription() {
		return "iOS implemented";
	}
	
	public String getIcon() {
		return "appico.png";
	}
	
	public boolean isAnalyticsEnabled() {
		return true;
	}
	
	public String getGUID() {
		return "c024aca8-1e03-4020-9866-e0ded4891dd6";
	}
	
	public boolean isFullscreen() {
		return false;
	}
	
	public boolean isNavBarHidden() {
		return false;
	}
}
