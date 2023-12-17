import 'dart:developer';

import 'package:flutter/material.dart' hide PageController;
import 'package:get/get.dart';
import 'package:go_router/go_router.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:intl/intl.dart';
import 'package:url_strategy/url_strategy.dart';

import './config/constants.dart';
import './config/theme.dart';
import './pages/export.dart';
import './tools/controllers/page.dart';
import './tools/controllers/route.dart';
import './tools/extensions.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  Intl.defaultLocale = LOCALE.code();
  await initializeDateFormatting(Intl.defaultLocale);

  setPathUrlStrategy();
  runApp(const Website());
}

class Website extends StatelessWidget {
  const Website({super.key});

  void initRouteController(GoRouterState state) {
    if (!Get.isRegistered<RouteController>()) {
      Get.put<RouteController>(
        RouteController(
          path: state.matchedLocation,
          args: state.pathParameters,
        ),
      );
    } else {
      final RouteController _routeController = Get.find<RouteController>();

      _routeController.path = state.matchedLocation;
      _routeController.args = state.pathParameters;
    }
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      debugShowCheckedModeBanner: false,
      title: "Yug Thapar",
      theme: WebsiteTheme.of(context),
      builder: (context, widget) {
        theme = WebsiteTheme.of(context);

        return widget!;
      },
      routerConfig: GoRouter(
        initialLocation: "/",
        errorBuilder: (_, state) {
          log("[GoRouter]: ${state.error}");

          initRouteController(state);

          // TODO: Error Page
          return Container();
        },
        routes: [
          GoRoute(
            path: "/",
            redirect: (_, state) {
              return "/home";
            },
          ),
          GoRoute(
            path: "/home",
            builder: (_, state) {
              initRouteController(state);
              Get.put(PageController(0));

              return const BasePage();
            },
          ),
          GoRoute(
            path: "/about",
            builder: (_, state) {
              initRouteController(state);
              Get.put(PageController(1));

              return const BasePage();
            },
          ),
          GoRoute(
            path: "/projects",
            builder: (_, state) {
              initRouteController(state);
              Get.put(PageController(2));

              return const BasePage();
            },
          ),
          GoRoute(
            path: "/work",
            builder: (_, state) {
              initRouteController(state);
              Get.put(PageController(3));

              return const BasePage();
            },
          ),
          GoRoute(
            path: "/contact",
            builder: (_, state) {
              initRouteController(state);
              Get.put(PageController(4));

              return const BasePage();
            },
          ),
        ],
      ),
    );
  }
}
