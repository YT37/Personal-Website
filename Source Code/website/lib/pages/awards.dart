import 'package:flutter/material.dart';

import '../config/constants.dart';
import '../services/responsive.dart';
import '../widgets/social_buttons.dart';

class AwardsPage extends StatelessWidget {
  const AwardsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          height: 500,
          child: Center(
            child: Text(
              "Awards",
              style: theme.textTheme.titleLarge,
            ),
          ),
        ),
        Container(
          height: Responsive.isDesktop(context) ? 130 : 330,
          color: theme.colorScheme.secondary,
          padding: const EdgeInsets.all(10),
          child: Column(
            children: [
              Responsive(
                desktop: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        const _Greetings(),
                        madeBy(),
                      ],
                    ),
                    const _Details(),
                  ],
                ),
                mobile: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const _Greetings(),
                    const Divider(),
                    const _Details(),
                    madeBy(),
                  ],
                ),
              ),
              //  if(Responsive.isMobile(context)) madeBy(),
            ],
          ),
        ),
      ],
    );
  }

  Column madeBy() {
    return Column(
      children: [
        const Divider(),
        const SizedBox(height: 5),
        Text(
          "Made By : Yug Thapar",
          style: theme.textTheme.titleSmall!.copyWith(
            color: theme.colorScheme.primary,
            fontWeight: FontWeight.bold,
          ),
        ),
      ],
    );
  }
}

class _Greetings extends StatelessWidget {
  const _Greetings();

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        Text(
          "Thanks for visting my site, \nIt was great that you were here!",
          textAlign: Responsive.isMobile(context) ? TextAlign.center : null,
          style: theme.textTheme.titleLarge!.copyWith(
            color: theme.colorScheme.primary,
            fontWeight: FontWeight.normal,
          ),
        ),
        if (Responsive.isMobile(context)) const SocialButtons(expanded: true),
      ],
    );
  }
}

class _Details extends StatelessWidget {
  const _Details();

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: List.generate(details.length, (index) {
        final String _detail = details[index][0];
        final IconData _icon = details[index][1];

        return Padding(
          padding: EdgeInsets.all(Responsive.isMobile(context) ? 10 : 5),
          child: Row(
            children: [
              Icon(_icon, color: theme.colorScheme.primary),
              const SizedBox(width: 10),
              Text(
                _detail,
                style: theme.textTheme.titleSmall!
                    .copyWith(color: theme.colorScheme.primary),
              ),
            ],
          ),
        );
      }),
    );
  }
}
